import axios from 'axios';

const get = async (
  route: string,
  id: string | null = null,
  ): Promise<any> => {
  try {
    let response: any;
    let headers = {};

    let stringRequest: string = `${process.env.NEXT_PUBLIC_BASE_URL}${route}`;

    if (id?.toString()) {
      stringRequest = stringRequest + `/${id}`;
    }
    
    response = await axios.get(
      stringRequest,
      { headers }
    );

    return response.data;

  } catch (e) {
    if (axios.isAxiosError(e)) {
      return e.response;
    }
  }
};


const save = async (
  route: string,
  data: Partial<any>,
  id?: string
): Promise<any> => {
  try {
    let response: any;
    let headers = {};

    if (id?.toString) {
      response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}${route}/${id}`,
        data,
        { headers }
      );
    } else {
      response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
        data,
        { headers }
      );
    }
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return e.response;
    }
  }
};


export default {
  get,
  save
};
