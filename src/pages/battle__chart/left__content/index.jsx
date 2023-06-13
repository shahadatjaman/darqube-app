import { useEffect } from "react";

export const WidgetComponent = () => {
  useEffect(() => {
    const handleMessage = (msg) => {
      const widget = document.getElementById("TickerTape-qt6w1rd");

      if (!widget) return;

      const styles = msg.data?.styles;
      if (styles) {
        Object.keys(styles).forEach((key) =>
          widget.style.setProperty(key, styles[key])
        );
      }

      const height = msg.data?.tickerTapeHeight;

      if (height) {
        widget.style.setProperty("height", height + "px");
      }
    };

    window.top.addEventListener("message", handleMessage);

    return () => {
      window.top.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="mt-8">
      <iframe
        style={{ border: "none", width: "100%", height: "373px" }}
        data-widget-name=""
        name="TickerTape"
        src="https://darqube.com/external-embedding/ticker-tape?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWRnZXQiOnsiYXNzZXRfY2xhc3NlcyI6WyJJTkRFWEVTIiwiU1RPQ0tTIiwiRk9SRVgiXX0sIndfdHlwZSI6IlRpY2tlclRhcGUiLCJmZV9jZmciOnsiY21vZGUiOjAsImZjbHIiOiJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIiwiYmciOiJyZ2JhKDIxLCAyNSwgMzAsIDEpIiwiaCI6MzczLCJ3IjoxMTAwLCJhc3oiOnRydWUsImZ0IjoiZGVmYXVsdCIsImh0Ijoibm9uZSIsInRyaCI6W10sImNoYyI6InJnYmEoMjM3LCA1MCwgOTgsIDEpIiwiYmUiOmZhbHNlLCJiYyI6InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIsImJ3IjoxLCJjbiI6IiIsImxuZyI6ImVuIiwiY3RybHQiOjEsImhkaWNuIjpmYWxzZSwid3RtViI6eyJ0eXBlIjoiRGFycXViZSIsImVuYWJsZWQiOnRydWV9LCJ1YyI6InJnYmEoNDgsIDEzMSwgMTA5LCAxKSIsImRjIjoicmdiYSgyMzcsIDUwLCA5OCwgMSkiLCJjdHJsdiI6MSwic21iIjpbeyJuIjoiRVVSL1VTRCIsInQiOiJFVVJVU0QuT0FOREEifSx7Im4iOiJHQlAvVVNEIiwidCI6IkdCUFVTRC5PQU5EQSJ9LHsibiI6IkJUQyIsInQiOiJCVENVU0QuQUdSIn0seyJuIjoiRVRIIiwidCI6IkVUSFVTRC5BR1IifSx7Im4iOiJHb2xkIiwidCI6IlhBVVVTRC5PQU5EQSJ9LHsibiI6IlNpbHZlciIsInQiOiJYQUdVU0QuT0FOREEifSx7Im4iOiJBQVBMIiwidCI6IkFBUEwuVVMifSx7Im4iOiJUU0xBIiwidCI6IlRTTEEuVVMifSx7Im4iOiJNU0ZUIiwidCI6Ik1TRlQuVVMifSx7Im4iOiJBTVpOIiwidCI6IkFNWk4uVVMifSx7Im4iOiJVU0QvSlBZIiwidCI6IlVTREpQWS5PQU5EQSJ9XSwib3BuIjp0cnVlLCJjdGRjIjpmYWxzZX0sImV4cCI6MTY5NDI1ODk2Mywic3ViIjoiYWNjZXNzIn0.zVqMcp2lV_VGl1F1BNhOVa7cbsCYg-1RWdXQHiGNo6k"
        id="TickerTape-qt6w1rd"
      ></iframe>
    </div>
  );
};
