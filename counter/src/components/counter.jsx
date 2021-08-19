import React, {useState} from 'react';

const Counter = () => {
    const tags =  ['tag1', 'tag2', 'tag3']
    const [count, setCount] = useState(0)
    const formCount = ()=>{
        return count ===0?"Zero":count
    }
    const getBagecClasses = ()=>{
        let classes = "badge m-2 bg-"
        classes+= count ===0?'danger':'primary'
        return classes
    }
    const renderTags = ()=>{
        if(tags.length ===0) return "Tags not found"
        return tags.map((tag)=> <li key={tag}>{tag}</li>)
    }
    const handleIncrement=(productId)=>{
        console.log(productId)
        setCount(count+1)
    }
    const handleDecrement=(productId)=>{
        console.log(productId)
        if(count>=1){
            setCount(count-1)
        }
        
    }
    return (
        <React.Fragment>
            {/*renderTags()*/}
            <span className={getBagecClasses()}>{formCount()}</span>
            <button 
                onClick={()=>handleIncrement({})}
                className="btn btn-secondary btn-sm"
                >Increment</button>
            <button 
                onClick={()=>handleDecrement({})}
                className="btn btn-secondary btn-sm"
                >Decrement</button>
        </React.Fragment>
    );
};

export default Counter;