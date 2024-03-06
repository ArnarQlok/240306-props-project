// ### **Övning 1: Användning av Logical Operator för Conditional Rendering**

// **Uppgift**: Skapa en komponent som visar en välkomsthälsning endast om användaren är inloggad. Använd den logiska operatorn **`&&`** för att implementera denna funktionalitet.

// ### **Övning 2: Ternary Operator för Conditional Rendering**

// **Uppgift**: Skapa en komponent som visar antingen "Vänligen logga in" eller "Välkommen tillbaka, {name}!" beroende på om användaren är inloggad. Använd ternary operatorn för att visa de olika meddelandena.

export default function Message({ name, isLoggedIn }) {
  return (
    // <div className="welcome-message">
    //   {isLoggedIn && <h1>Välkommen Arnar</h1>}
    // </div>

    <div className="welcome-message">
      {isLoggedIn ? (
        <h1 style={{ color: "green" }}>Välkommen tillbaka, {name}</h1>
      ) : (
        <h1 style={{ color: "red" }}>Vänligen logga in</h1>
      )}
    </div>
  );
}
