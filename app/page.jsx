import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quod, quis consequatur quam sed labore soluta ut? 
            Unde, veniam quis minima enim rem iste laudantium. Quisquam alias 
            temporibus fugit. Itaque, voluptas?</p> 

            <Feed/>
            {/* Feed   */}
    </section>
  )
}

export default Home