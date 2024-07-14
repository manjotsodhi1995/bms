function VideoSection() {
  return (
    <div className="flex flex-col items-center justify-center p-4 mb-6">
      <h2 className="title text-lg md:text-4xl font-bold mb-8 text-center">
        Check out the video for step by step instructions:
      </h2>
      <div className="w-full max-w-5xl">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Step by Step Instructions"
            allowFullScreen
            className="w-full h-full"></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
