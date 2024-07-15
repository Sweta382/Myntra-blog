import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Cracking Internships?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout My Interview Experiences to Master the Art of Landing Lucrative Internships and Boost Your Career!!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.geeksforgeeks.org/10-tips-and-tricks-to-crack-internships-and-placements/" target='_blank' rel='noopener noreferrer'>
                   Tips & Tricks to Crack Internships
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://media.licdn.com/dms/image/D4E12AQFgZeTiXUi1iA/article-cover_image-shrink_720_1280/0/1695227065902?e=2147483647&v=beta&t=5XfyM5cd8ZJrrBXycy0HxHOFgPL1fXByn9h1njf-_o8" />
        </div>
    </div>
  )
}