import { MDXRemote } from 'next-mdx-remote/rsc'

type EmailCardProps = {
  fromName: string
  from: string
  to: string
  toName: string
  subject: string
  content: string
}

export default function EmailCard({
  fromName,
  from,
  toName,
  to,
  subject,
  content
}: EmailCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl w-full">
      <div className="flex justify-between mb-4">
        <div>
          <div className="flex items-center">
            <div>
              <p className="text-sm text-gray-400">From</p>
              <h2 className="font-bold text-gray-900">{fromName}</h2>
              <p className="text-sm text-gray-600">{from}</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div>
              <p className="text-sm text-gray-400">To</p>
              <h2 className="font-bold text-gray-900">{toName}</h2>
              <p className="text-sm text-gray-600">{to}</p>
            </div>
          </div>
        </div>
        <span className="text-sm text-gray-500">Jul 23, 2024, 10:30 AM</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{subject}</h3>
      <div className="border-y border-gray-200 py-4 mb-4">
        <MDXRemote source={content} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
            Work
          </span>
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
            Important
          </span>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
