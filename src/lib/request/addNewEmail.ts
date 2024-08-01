export const addNewEmail = async (email: string) => {

    try {

        const backendLink = `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/waitlist`;

        const response = await fetch(backendLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email}),
        });

        const data = await response.json();
        if (!data) {
            return {
                isError: "sorry there was an error in the server",
            };
        };

        if (data.res && data.res === false) {
            return {
                isError: data.message,
            };
        };

        return {
            isError: "",
        };

    } catch (error) {
        console.log(error, "error ADDING the email");
        return {
            isError: "sorry there was an error in the server, please try again",
        };
    };
    
};
