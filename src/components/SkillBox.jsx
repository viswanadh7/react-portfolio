
const SkillBox = ({ name, image }) => {
    return (
        <div className='flex justify-between items-center gap-4 bg-slate-100 border px-2.5 py-1.5 rounded-md'>
            <img className='h-7 w-7' src={image} alt={name} />
            <p className='font-semibold'>{name}</p>
        </div>
    )
}

export default SkillBox