import { MockData } from "@/types/dashboard";

export const mockData: MockData = {
    dashboardStats: [
        {
            label: "Total Value",
            value: "$1,234,567",
            description: "+12% from last month",
            intent: "positive",
            icon: "dollar-sign",
        },
    ],
    chartData: {
        week: [],
        month: [],
        year: [],
    },
    rebelsRanking: [],
    securityStatus: [],
    notifications: [
        {
            id: "1",
            title: "Payment Received",
            message: "Your payment to Rampant Studio has been processed successfully.",
            timestamp: "10/07/2024",
            type: "success",
            read: false,
            priority: "medium",
        },
        {
            id: "2",
            title: "System Update",
            message: "Security patches have been applied to all guard bots.",
            timestamp: "10/07/2024",
            type: "info",
            read: true,
            priority: "medium",
        },
    ],
    widgetData: {
        location: "Buenos Aires, Argentina",
        timezone: "UTC-3",
        temperature: "18°C",
        weather: "Cloudy",
        date: "Saturday, December 6, 2025",
    },
};
