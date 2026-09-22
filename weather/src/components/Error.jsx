import '../styles/Error.css'

function Error(){
    return(
        <div className='error-msgs'>
            <img className='error-img' src="/assets/images/icon-error.svg" alt="" />
            <p className='error-msg1'>Something went wrong</p>
            <p className='error-msg2'>We couldn't connect to the server(API error).Please try again in a few moments.</p>
            <button className='retry-button'>
                <img src="/assets/images/icon-retry.svg" alt="" />Retry
            </button>
        </div>
    )
}

export default Error;