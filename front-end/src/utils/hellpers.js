/* eslint-disable default-case */
import { NotificationManager } from "react-notifications";

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export const createNotification = (type, title, message, time = 3000) =>
  NotificationManager[type](message, title, time);
