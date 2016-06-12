(function() {
  'use strict';

  angular
      .module('angularTest')
      .factory('sessionService', sessionService);

  function sessionService($resource, $http) {

    var data = {

    };

    function getSessions() {
      $http.get('http://localhost:9000/api/sessions?user=joel.t.miller@gmail.com').then(function(response) {
        data.sessions = response.data;
      });
    }

    function getDetails(session) {
      $http('http://www.omdbapi.com/?t=Slime&y=&plot=short&r=json')
        .then(function(response) {
          console.log(response.data);
        });
    }

    function updateDetailSession() {
      $http.get('http://www.omdbapi.com/?t=Slime&y=&plot=short&r=json')
        .then(function(response) {
          data.detailSession = response.data;
        });
    }

    function modifySession() {

      var payload = {};
      var sessionId = data.detailSession._id;
      payload.subject = {
        firstname: data.detailSession.subject.firstname,
        lastname: data.detailSession.subject.lastname,
        code: data.detailSession.subject.code
      };

      $http.put('http://localhost:9000/api/sessions/' + sessionId + '?user=joel.t.miller@gmail.com', payload)
        .then(function(response) {
        return response.data;
      });
    }

    function addNote(note) {
      var sessionId = data.detailSession._id;
      var baseURL = 'http://localhost:9000/api/sessions/';
      var payload = {
        text: note
      };
      $http.post(baseURL + sessionId + '/notes' + '?user=joel.t.miller@gmail.com', payload)
        .then(function(response) {
          updateDetailSession(sessionId);
        });
    }

    function setDetailSession(session) {
      data.detailSession = session;
    }

    function getDetailSession() {
      return data.detailSession;
    }

    return {
      getSessions: getSessions,
      getDetails: getDetails,
      modifySession: modifySession,
      addNote: addNote,
      setDetailSession: setDetailSession,
      data: data,
      updateDetailSession: updateDetailSession,
      getDetailSession: getDetailSession
    };
  }
})();
