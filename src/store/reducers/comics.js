import {defineState} from 'redux-localstore';

const defaultState = [];

const initialState = defineState(defaultState)('comics')

export default function comics(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COMIC':
      return [...state, action.comic]
    case 'CLEAN_COMICS':
      return state=[]
    default:
      return state;
  }
}