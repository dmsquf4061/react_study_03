import NotFound from '../components/pages/not-found/not-found';

function NotFoundPage() {
  return (
    <div className="flex flex-col w-full h-full bg-black">
      {/* 404 */}
      <NotFound />
    </div>  
  )
}

export default NotFoundPage