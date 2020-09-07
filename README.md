# Hutch FE Test

Welcome to the coding test for the Hutch Front End Developer position. In this repository, you'll find a very bare bones Angular SPA containing some interfaces from one of our games and some services to load mock data that fulfils the interface contracts.

Working in the branch you have been assigned, we would like you to work through the following tasks: 

## Displaying the PortalSync data

You will find a large chunk of mock data supplied in `adminportal/src/app/mockdata/PortalSync.ts`. This is the sort of size of data we would expect our customer service agents to load for any player in our game. It contains several different pieces of information for a player, based on different parts of the meta game - eg their garage of cars, progress through different tiers, how many ads they have watched, how many purchases they have made etc. 

We would like you to provide a clean, fast, user-friendly interface for loading and viewing this data. Feel free to split the data up and provide multiple services if you would prefer - however you see fit with these core ideas in mind. To load a user's data, we would expect the UI to support searching by:

HutchId (unique, 1-1 relationship)
FacebookId (unique, 1-1 relationship)
GoogleId (unique, 1-1 relationship)
AppleId (unique, 1-1 relationship)
DeviceId (non-unique, 1-many relationship)
GoogleReceiptId (non-unique, 1-many relationship)
Social Name (non-unique, 1-many relationship)

You don't need to implement the search (just load the mock data) but we would like to see how you would present this form and the options returned by it.

You don't need to implement all the properties of the `PortalSync` object, but enough that we can see how you would choose to lay out various sizes of arbitrary data about a user.

## Error handling

The data for the admin portal will be loaded from a remote service. Lots can go wrong between making a request to the service and receiving a response. 

We would like you to implement a system that propagates errors from remote server calls to the operator in a friendly way. For the purposes of the test, you can assume that errors will be returned with standard HTTP status codes 400, 401, 403, 404, 500, 503, and the body of the reponse will be JSON encoded with a property `message` and a property `stackTrace`

## Versioning

The game servers support multiple versions of the live game at a time (backwards compatible) so when we release new versions of the game, users on the old version can continue to play for a while before upgrading. Because of this, the admin portal also needs to support multiple versions. In fact, all of our service requests contain two headers that form part of our versioning protocol between the client and the server, these are `App-Version` and `Data-Version`. You can see these are passed through to service calls in `adminporta/src/app/services/portal-sync/service.ts`. 

We would like you to provide a way for the user to choose an `App-Version` and a `Data-Version`, and for their choice to be stored until changed, and presented to them on all screens so they don't forget! This should then be passed through to any service calls.

## Security

The calls to load data from the remote server are guarded by the use of JWT tokens that we grant to users via an OAuth flow. The tokens typically last for one hour, and then the user has to authenticate again. You can see the token should be passed through to service calls in `adminporta/src/app/services/portal-sync/service.ts`. 

We would like you to provide a mechanism to store a granted token and pass it to service calls, and detect when it has expired and prompt the user to reauthenticate.

## Landing/Home page

The admin portal is for more than just loading a user's data. We use it to configure and schedule offers and events, A/B test data, examine logs, update localizations etc. We currently host three separate environments - Development, Test and Production, each with its own admin portal. 

We would like you to provide a home page that makes it easy for a user to find the desired functionality, and to easily tell which enviroment they are operating on

