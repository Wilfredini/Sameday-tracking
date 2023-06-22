import { Form, Input, Select, Checkbox } from "antd";
import { Controller, useForm } from "react-hook-form";

function Tracker() {
  const { handleSubmit, control } = useForm<{
    sdl: string;
    optionFreight: string;
    note: string;
    pickUpAdress: string;
    deliveryAdress: string;
    complete: boolean;
  }>();

  return (
    <div className="tracker mb-5">
      <div className="container">
        <Form
          className="d-flex justify-content-between align-items-center"
          onFinish={handleSubmit((data) => {
            console.log("Data submited", data);
          })}
        >
          <div className="row w-50 align-items-center">
            <div className="col-6 px-0">
              <Controller
                control={control}
                name="sdl"
                render={({ field }) => {
                  return (
                    <div className="textfield">
                      <Input
                        className="input ms-0 my-1"
                        placeholder="SDL#"
                        value={field.value ? field.value : ""}
                        onChange={(e) => {
                          field.onChange(e ? e : "");
                        }}
                      />
                    </div>
                  );
                }}
              />
            </div>
            <div className="col-6 px-0">
              <Controller
                control={control}
                name="optionFreight"
                render={({ field }) => {
                  return (
                    <div className="textfield">
                      <Select
                        placeholder="Typ servisu"
                        className="select my-1"
                        onChange={(e) => {
                          field.onChange(e ? e : "");
                        }}
                        options={[
                          { value: "Airfreight", label: "Airfreight" },
                          { value: "Roadfreight", label: "Roadfreight" },
                          { value: "OBC", label: "OBC" },
                          { value: "Charter", label: "Charter" },
                        ]}
                      />
                    </div>
                  );
                }}
              />
            </div>
            <div className="col-12 px-0">
              <Controller
                control={control}
                name="note"
                render={({ field }) => {
                  return (
                    <div className="textfield ">
                      <Input
                        className="input note my-1"
                        placeholder="Popis přepravy"
                        onChange={(e) => {
                          field.onChange(e ? e : "");
                        }}
                      />
                    </div>
                  );
                }}
              />
            </div>
          </div>
          <div>
            <Controller
              control={control}
              name="pickUpAdress"
              render={({ field }) => {
                return (
                  <div className="textfield">
                    <Input
                      className="input m-1"
                      placeholder="Adresa vyzvednutí"
                      onChange={(e) => {
                        field.onChange(e ? e : "");
                      }}
                    />
                  </div>
                );
              }}
            />
            <Controller
              control={control}
              name="deliveryAdress"
              render={({ field }) => {
                return (
                  <div className="textfield">
                    <Input
                      className="input m-1"
                      placeholder="Doručovací adresa"
                      onChange={(e) => {
                        field.onChange(e ? e : "");
                      }}
                    />
                  </div>
                );
              }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column mx-3">
            <button
              type="submit"
              className="btn btn-success text-white w-100 m-1"
            >
              Vytvořit přepravu
            </button>
            <button className="btn btn-danger text-white m-1 w-100">
              Vymazat přepravu
            </button>
          </div>
          <Controller
            control={control}
            name="complete"
            render={({ field }) => {
              return (
                <Checkbox
                  className="text-white"
                  onChange={(date) => {
                    field.onChange(date ? true : false);
                  }}
                >
                  Přeprava kompletní
                </Checkbox>
              );
            }}
          />
        </Form>
      </div>
    </div>
  );
}

export default Tracker;
