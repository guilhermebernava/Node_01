class Responses implements IResponse {
  sucess: boolean;
  data: JSON;

  constructor(sucess: boolean, data: JSON) {
    this.sucess = sucess;
    this.data = data;
  }
}
