const Notification = ({message}) => {
    if (message) {
        return (
            <div class="notification">
                {message}
            </div>
        )
    }
    return null;
}

export default Notification