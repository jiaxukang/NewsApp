"use client";

export default function ErrorPage({ error }) {
    return (
        <>
            <div id="error">
                <h1>Error</h1>
                <p>{error.message}</p>
            </div>

        </>
    );
}