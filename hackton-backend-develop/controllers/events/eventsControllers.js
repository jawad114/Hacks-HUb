/* eslint-disable no-use-before-define */
const moment = require('moment');
const db = require('../../models/eventsModel');
const requestHandler = require('../../utils/requestHandler');
const jwt=require('jsonwebtoken');
function handleEventsGetByUSerId(req, res) {
  const { userId } = req.decodedToken;
  const { perPage } = req.query;
  const { currentPage } = req.query;
  db.getByUserId(perPage, currentPage, userId)
    .then(data => {
      return requestHandler.success(
        res,
        200,
        'Successfully retrieved all your events',
        data
      );
    })
    .catch(error => {
      return requestHandler.error(res, 500, `server error ${error.message}`);
    });
}

function handleEventGetById(req, res) {
  const { id } = req.params;
  db.findById(id)
    .then(data => {
      return requestHandler.success(
        res,
        200,
        'Events retrieved Successfully',
        data
      );
    })
    .catch(error => {
      return requestHandler.error(res, 500, `server error ${error.message}`);
    });
}

function handleEventsDelete(req, res) {
  const { id } = req.params;
  db.remove(id)
    .then(() => {
      return requestHandler.success(
        res,
        200,
        'your event was deleted successfully!'
      );
    })
    .catch(error => {
      return requestHandler.error(res, 500, `server error ${error.message}`);
    });
}

function handleEventsEdit(req, res) {
  const { id } = req.params;
  const { userId } = req.decodedToken;
  const editedStartDate = moment(req.body.start_date).format('YYYY-MM-DD');
  const editedEndDate = moment(req.body.end_date).format('YYYY-MM-DD');
  const editedEvent = {
    event_title: req.body.event_title,
    numberOfParticipants: req.body.numberOfParticipants,
    creator_id: userId,
    start_date: editedStartDate,
    end_date: editedEndDate,
    location: req.body.location,
    preferedLanguage: req.body.preferedLanguage,
    prizeAmount: req.body.prizeAmount,
    category_id: req.body.category_id,
    levelOfParticipant:req.body.levelOfParticipant

  };

  db.update(id, editedEvent)
    .then(data => {
      return requestHandler.success(
        res,
        200,
        'your event was edited successfully!',
        { event: data }
      );
    })
    .catch(error => {
      return requestHandler.error(res, 500, `server error ${error.message}`);
    });
}

function handleEventsPost(req, res, next) {
  const startDate = moment(req.body.start_date).format('YYYY-MM-DD');
  const endDate = moment(req.body.end_date).format('YYYY-MM-DD');

  const token = req.headers.authorization;
    
    // Verify and decode the JWT token to extract the user ID
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const {userId} = decodedToken;
    console.log(userId)

  const event = {
    event_title: req.body.event_title,
    numberOfParticipants: req.body.numberOfParticipants,
    creator_id: userId,
    start_date: startDate,
    allowed_time : req.body.allowed_time,
    end_date: endDate,
    location: req.body.location,
    preferedLanguage: req.body.preferedLanguage,
    prizeAmount: req.body.prizeAmount,
    category_id: req.body.category_id,
    levelOfParticipant:req.body.levelOfParticipant
  };

  db.add(event)
    .then(data => {
      return requestHandler.success(
        res,
        201,
        'Your event was added successfully!',
        { event_id: Number(data.toString()) }
      );
    })
    .catch(error => {
      return requestHandler.error(res, 500, `Server error: ${error.message}`);
    });
}



function handleEventsGet(req, res) {
  db.find()
    .then(data => {
      return requestHandler.success(
        res,
        200,
        'All Events retrieved Successfully',
        data
      );
    })
    .catch(error => {
      return requestHandler.error(res, 500, `server error ${error.message}`);
    });
}

module.exports = {
  handleEventsGetByUSerId,
  handleEventGetById,
  handleEventsDelete,
  handleEventsEdit,
  handleEventsPost,
  handleEventsGet
};
