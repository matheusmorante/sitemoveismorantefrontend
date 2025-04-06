const handleTitle = (title: string) => {
    if(title.length > 30) {
        return title.slice( 0, 29) + '...';
    }

    return title
}

export default handleTitle
