import { apiCall } from './apiCall';

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = 'bMCbcvG6WzaYp0M5hQCNg';

export const getEstimates = () => {
  return apiCall(
    'get',
    `https://www.carboninterface.com/api/v1/estimates`,
    apiKey,
  );
};

export const postEstimate = (unit: string, usage: string | number, location: string) => {
  return apiCall(
    'post',
    `https://www.carboninterface.com/api/v1/estimates`,
    apiKey,
    {
      "type": "electricity",
      "electricity_unit": unit,
      "electricity_value": usage,
      "country": location,
    }
  );
};