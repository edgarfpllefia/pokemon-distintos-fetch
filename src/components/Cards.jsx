export function Cards({ data }) {
  return (
    <div className="border border-gray-300 rounded-lg p-3 bg-white hover:shadow-lg">
      <img 
        src={data.sprites.front_default} 
        alt={data.name}
        className="w-full h-24 object-contain"
      />
      <p className="text-sm font-bold text-center mt-2 capitalize">
        {data.name}
      </p>
      <p className="text-xs text-center text-gray-500">
        #{data.id}
      </p>
    </div>
  );
}
