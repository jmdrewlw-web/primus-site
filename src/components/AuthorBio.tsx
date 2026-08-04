export default function AuthorBio() {
  return (
    <div className="flex flex-row items-start gap-5 border border-gray-200 rounded-xl p-6 bg-gray-50">
      {/* Avatar */}
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center">
        <span className="text-white font-bold text-lg select-none">JD</span>
      </div>

      {/* Text */}
      <div>
        <p className="font-bold text-gray-900">Jason Drewelow</p>
        <p className="text-gray-600 text-sm">Principal, Primus Companies</p>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Jason leads Primus Companies, a commercial construction company rooted in Cedar Rapids since 1973.
        </p>
      </div>
    </div>
  );
}
