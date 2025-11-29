import ReactPlayer from 'react-player';

function VideoSection() {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-10 md:gap-15 px-5 py-10 md:py-20">
        <div className="flex flex-col w-full md:max-w-9/10 h-full gap-8 items-center bg-stone-500 rounded-md md:rounded-2xl">
          {/* <video 
            className="w-full"
            src="/resource/mainhero/sample_video.mp4"
            autoPlay
            muted
            controls={false}
            loop
          ></video> */}
          <ReactPlayer 
            className="w-full"
            width="100%"
            height="100%"
            src="/resource/mainhero/sample_video.mp4"
            autoPlay
            muted
            controls
            loop
          />
        </div>
    </section>
  )
}

export default VideoSection