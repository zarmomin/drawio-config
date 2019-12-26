import { customPresetColorsReducer } from './customPresetColors';
import { Configuration, Action, ConfigReducer } from './types';
import { customFontsReducer } from './customFonts';
import { customColorSchemesReducer } from './customColorSchemes';

export const configReducer: ConfigReducer<Configuration, Action> = (state, action) => {
    return {
        customPresetColors: customPresetColorsReducer(state.customPresetColors, action),
        customFonts: customFontsReducer(state.customFonts, action),
        customColorSchemes: customColorSchemesReducer(state.customColorSchemes, action),
        defaultVertexStyle: {},
        defaultEdgeStyle: {},
    };
};

export const initialConfig: Configuration = {
    customPresetColors: [
        'E6D0DE',
        'CDA2BE',
        'B5739D',
        'E1D5E7',
        'C3ABD0',
        'A680B8',
        'D4E1F5',
        'A9C4EB',
        '7EA6E0',
        'D5E8D4',
        '9AC7BF',
        '67AB9F',

        'D5E8D4',
        'B9E0A5',
        '97D077',
        'FFF2CC',
        'FFE599',
        'FFD966',
        'FFF4C3',
        'FFCE9F',
        'FFB570',
        'F8CECC',
        'F19C99',
        'EA6B66',
    ],
    customFonts: ['Segoe UI', 'Segoe Script'],
    customColorSchemes: [
        [
            null,
            {
                fill: '#e6d0de',
                gradient: 'none',
                stroke: '#cda2be',
                font: '#b5739d',
            },
            {
                fill: '#d4e1f5',
                gradient: 'none',
                stroke: '#a9c4eb',
                font: '#7ea6e0',
            },
            {
                fill: '#d5e8d4',
                gradient: 'none',
                stroke: '#9ac7bf',
                font: '#67ab9f',
            },
            {
                fill: '#e1d5e7',
                gradient: 'none',
                stroke: '#c3abd0',
                font: '#a680b8',
            },
            {
                fill: '#fff4c3',
                gradient: 'none',
                stroke: '#ffce9f',
                font: '#ffb570',
            },
            {
                fill: '#d5e8d4',
                gradient: 'none',
                stroke: '#b9e0a5',
                font: '#70a057',
            },
        ],
    ],
    defaultVertexStyle: {},
    defaultEdgeStyle: {},
};

export const getInitialConfig = (): Configuration => {
    const savedConfig = localStorage.getItem('drawioconfig');
    if (!savedConfig) {
        return initialConfig;
    }
    try {
        return JSON.parse(savedConfig);
    } catch (error) {
        console.log(error);
        return initialConfig;
    }
};
