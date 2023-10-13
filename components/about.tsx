const About = () => {
    return (
        <section className="relative mx-auto">
            <div className="flex flex-col justify-center items-center gap-16">
                 <div className="text-5xl font-serif">
                    What is Sentron?
                 </div>
                 <div>
                    <iframe
                    width="800" 
                    height="420"
                    src="https://www.youtube.com/watch?v=gHMnUeTRQl8" // Replace with your YouTube video URL
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                    </iframe>
                 </div>
                 <div className="text-2xl font-serif">
                 Sentron is a web-based tool that makes creating machine <br>
                 </br>learning models fast, easy, and accessible to everyone.
                 </div>
            </div>
        </section>
    );
}
 
export default About;