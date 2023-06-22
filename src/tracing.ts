import {NodeSDK} from '@opentelemetry/sdk-node';
import {getNodeAutoInstrumentations} from '@opentelemetry/auto-instrumentations-node';
import {OTLPTraceExporter} from "@opentelemetry/exporter-trace-otlp-grpc";

let traceExporter = new OTLPTraceExporter()

const sdk = new NodeSDK({
    traceExporter: traceExporter,
    instrumentations: [getNodeAutoInstrumentations()],
    serviceName: "my-example-service",
});

sdk.start()
    .then(() => {
        console.log('Tracing initialized');
    })
    .catch((error) => console.log('Error initializing tracing', error));