import Head from "next/head";

export default function AppLayout({ children }) {
    return (
        <>
            <Head>
                <title>testmayoral</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> {/* for media queries to work */}
            </Head>
            <main>
                {children}
            </main>
            <style jsx global>
                {`        
                    main {
                        padding-top: 200px;                             
                    }
                    .header {
                        background-color: #FEFEFE;
                    }
                    .header-bottom-line {
                        height: 3em;
                        width: 90%;
                        border-bottom: 1px solid #D7DBDD;
                    }
                    @media only screen 
                    and (min-width: 768px) {
                        .header-bottom-line {
                            display: none
                        }
                        .header {
                            flex-direction: row-reverse !important;
                            flex-wrap: wrap;
                            justify-content: space-around !important;
                            padding-top: 2em;  
                            padding.bottom: 2em;                      
                        }
                    }         
                `}
            </style>
        </>
    )
}