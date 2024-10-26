
// get events by type
vars: {
  "type": "FLAGSHIPEVENTS"
}

query Query($type: String) {
  getEventsByType(type: $type) {
    name
    id
  }
}

// Register User
vars: {
    "user": {
      "college": null,
      "idCard": null,
      "mobile": null,
      "name": null,
      "receipt": null,
      "uid": null,
      "email": null,
      "referredBy": null,
      "transactionID": null,
      "rollNumber": null,
      "hasPaid": null,
      "gender": null
    }
  }

mutation Mutation($user: UserCreateInputType!) {
    createUser(user: $user) {
      id
      hasPaid
    }
  }


// Get User by uid
vars:{
    "uid": "aYV5uz4Adlc6NrssoyMVQADDzZm2"
  }

query Query($uid: ID) {
    user(uid: $uid) {
      data {
        name
        id
      }
    }
  }

// EventRegistration
vars: {
    "eventRegistration": {
      "eventID": "671bbe15aacbd171687071d6",
      "userID": "671a4c916cb9cfd6df764b70"
    }
  }
mutation Mutation($eventRegistration: EventRegistrationCreateInputType!) {
    createEventRegistration(eventRegistration: $eventRegistration) {
      event {
        name
      }
      user {
        name
      }
    }
  }

// Get list of events registered by a user
vars: {
    "userId": "671a4c916cb9cfd6df764b70"
  }
query Query($userId: ID) {
    eventRegistration(userID: $userId) {
      eventID
      event {
        name
      }
    }
  }
// or
query Query($userId: ID) {
    eventRegistration(userID: $userId) {
      eventID
    }
  }

// Get the count of students (users) associated with this Org
vars: {
    "orgType": "INSTITUTE"
  }

query Query($orgType: OrgType) {
    org(orgType: $orgType) {
      name
      registrations
      studentCount
    }
  }

// Get gender wise count of users 
vars: {
    "orgId": "671bb67e578281c65287a545"
  }

query Query($orgId: ID) {
    user(orgID: $orgId) {
      data {
        gender
      }
    }
  }



