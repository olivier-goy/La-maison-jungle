import "../Categories/Categories.css" 

function Categories({ categories, useCategory, setUseCategory }) {

    return (
        <div className="lmj-categories">
            <select value={useCategory} onChange={(e) => setUseCategory(e.target.value)} className='lmj-categories-select'>
                <option value="">---</option>
                {categories.map((category) => (
                
                <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => setUseCategory('')}>Réinitialiser</button>
       </div>
   )
}
 
export default Categories