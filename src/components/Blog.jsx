import { useEffect } from "react"
import { connect } from "react-redux"
import { getPosts } from "../redux/reducers/posts.reducer"
import Section from './Section'

const Blog = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <Section title='Posts' subtitle='Estado array de objetos con asincronía'>
      {
        posts.isFetching ? (
          <div>Cargando...</div>
        ) : (
          <div>
            <button onClick={getPosts} className='btn block m-auto w-1/2'>
              Traer posts
            </button>
            <ul className="mt-3">
              {
                posts.posts.map((post) => (
                  <li key={post.id} className='font-semibold m-1'>📰 "{post.title}"</li>
                ))
              }
            </ul>
          </div>
        )}
    </Section>
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