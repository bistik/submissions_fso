const ErrorNotification = ({message}) => {
    if (message) {
        return (
            <div class="error">
                {message}
            </div>
        )
    }
    return null;
}

export default ErrorNotification