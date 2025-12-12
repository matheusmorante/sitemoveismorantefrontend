const handleDescription = (description: string) => {
  if (description.length > 30) {
    return description.slice(0, 29) + '...';
  }

  return description;
};

export default handleDescription;
