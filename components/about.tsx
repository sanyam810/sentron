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
                 <div className="text-2xl font-serif justify-center items-center">
                 The new app and web tool for turning text into videos at railway and bus stations tackles important challenges in sharing information with the public. Language diversity often confuses passengers because information isn't available in their language. This system solves this by providing information in multiple regional languages in real-time, benefiting both locals and tourists. It's also easy to adjust as language needs change and has features for different passenger requirements. In the end, it makes sharing important information more efficient and consistent, making travel better for everyone.
                 </div>
            </div>
        </section>
    );
}
 
export default About;