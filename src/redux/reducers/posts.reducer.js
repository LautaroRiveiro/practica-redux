const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

export const getPosts = () => (dispatch) => {
  dispatch({ type: GET_POSTS_REQUEST })

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((posts) => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: {
          posts: posts.slice(0, 10)
        }
      })
    })
    .catch((error) => {
      dispatch({
        type: GET_POSTS_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

const initState = {
  posts: [],
  isFetching: false,
  error: null
}

export const posts = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      console.log("GET POST REQUEST")
      return {
        ...state,
        isFetching: true
      }

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        posts: action.payload.posts
      }

    case GET_POSTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }

    default:
      return state
  }
}