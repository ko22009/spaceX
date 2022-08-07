type Launch = {
  name: string;
  details: string;
  date_utc: Date;
  links: {
    patch: {
      small: string;
    };
  };
  id: string;
};

export default Launch;
