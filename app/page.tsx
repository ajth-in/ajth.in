import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Hello there. 
      </h1>
      <p className="mb-4">
        {`I'm Ajith Kumar P M, but you can call me Ajith. I'm a front-end engineer based on India. Here are a few projects and experiences I've made so far.`}
      </p>
      <hr className='border-1'/>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
