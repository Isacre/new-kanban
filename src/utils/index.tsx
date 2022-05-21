import React from "react";

/** This function receives a keyboard event and executes a callback function if 'Enter' or 'ESC' is pressed. */
export function KeyboardHandler(
  event: React.KeyboardEvent<HTMLInputElement>,
  onEnter: () => void,
  onEsc: (value: boolean) => void
) {
  const EnterIsPressed = event.key === "Enter";
  const EscIsPressed = event.key === "Escape";
  if (EnterIsPressed) {
    onEnter();
  }
  if (EscIsPressed) {
    onEsc(false);
  }
}

/**Handles Blur. If there is no value, its gonna execute the closing function, otherwise its gonna execute the saving function. */
export function onBlurHandler(value: string, savingfunction: () => void, closingfunction: (value: boolean) => void) {
  if (value.length > 0) {
    savingfunction();
  } else {
    closingfunction(false);
  }
}

/** Saves on localStorage. */
export function SaveOnLocal(key: string, value: any) {
  const valueAsString = JSON.stringify(value);
  localStorage.setItem(key, valueAsString);
}
