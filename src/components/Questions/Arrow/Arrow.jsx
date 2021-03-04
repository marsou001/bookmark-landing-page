function Arrow({ QuestionId, isActive }) {
    const rotateStyle = {
        transform: isActive ? 'rotate(180deg)' : 'none'
    }

    return (
        <svg data-id={QuestionId} style={rotateStyle} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path data-id={QuestionId} fill="none" stroke={ isActive ? 'hsl(0, 94%, 66%)' : '#5267DF'} strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
    );
}

export default Arrow;