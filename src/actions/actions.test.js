import configureMockStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import { searchVideos } from './index';
import { SEARCHVIDEOS } from './index';
import nock from 'nock';
import expect from 'expect';

const middlewares = [ReduxPromise];
const mockStore = configureMockStore(middlewares);
const API_KEY = 'AIzaSyA_qE_RS94qN3G1j8l6YriEuwlnwqNvjGU';

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  
  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
      nock('https://www.googleapis.com/')
        .get(
          `youtube/v3/search?part=snippet&q=term&maxResults=50&relevanceLanguage=en&regionCode=gb&key=${API_KEY}`
        )
        .reply(200, { body: { todos: ['do something'] } });
    
      const expectedActions = [
        { type: SEARCHVIDEOS, body: { todos: ['do something'] } },
      ];
      const store = mockStore({ todos: [] });
    
      return store.dispatch(searchVideos('k')).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
