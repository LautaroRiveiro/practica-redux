import { useEffect } from "react"
import { connect } from "react-redux"
import { getPosts } from "../redux/reducers/posts.reducer"

const Blog = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <div className="m-auto my-2 border max-w-3xl py-2">

      {
        posts.isFetching ? (
          <div>Cargando...</div>
        ) : (
          <div>
            <button onClick={getPosts} className='block bg-blue-600 w-1/2 m-auto py-2 text-white'>
              Traer posts
            </button>
            Posts:
            <ul>
              {
                posts.posts.map((post) => (
                  <li key={post.id}>- {post.title}</li>
                ))
              }
            </ul>
          </div>
        )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)