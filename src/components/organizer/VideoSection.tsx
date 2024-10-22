function VideoSection() {
  return (
    <div className="flex flex-col items-center justify-center md:p-4 px-4 md:mb-6 md:pt-10">
      <h2 className="title text-lg md:text-4xl font-semibold mb-8 text-center">
        Check out the video for step by step instructions:
      </h2>
      <div className="w-full max-w-full md:px-10">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Step by Step Instructions"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
