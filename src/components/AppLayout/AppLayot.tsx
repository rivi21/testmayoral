import Head from "next/head";

export default function AppLayout(props) {
    return (
        <>
            <Head>
                <title>testmayoral</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> {/* for media queries to work */}
            </Head>
            <main>
                {props.children}
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
                        height: .5em;
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