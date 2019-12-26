import { Dispatch } from 'react';

type DefaultStyle = {
    absoluteArcSize?: string;
    arcSize?: string;
    fontFamily?: string;
    fontSize?: number;
    gradientDirection?: 'east' | 'north' | 'west' | 'south';
    rounded?: '0' | '1';
    strokeWidth?: number;
};

export type CustomColorSchema = {
    stroke?: string;
    font?: string;
    fill?: string;
    gradient?: string;
};
export type CustomColorSchemes = Array<Array<CustomColorSchema | null>>;

export type CustomPresetColors = Array<string>;
export type CustomFonts = Array<string>;

export type Configuration = {
    customFonts: CustomFonts;
    customPresetColors: CustomPresetColors;
    defaultVertexStyle: DefaultStyle;
    defaultEdgeStyle: DefaultStyle;
    customColorSchemes: CustomColorSchemes;
};

type UpdateColorPayload = {
    index: number;
    color: string;
};

type DeleteColorPayload = {
    index: number;
};

type DeleteSchemaGroup = {
    groupIndex: number;
};

type UpdateColorSchema = {
    groupIndex: number;
    schemaIndex: number;
    schema: CustomColorSchema;
};

export type Action = {
    type: string;
    payload?: UpdateColorPayload | DeleteColorPayload | UpdateColorSchema | DeleteSchemaGroup;
};

export type ConfigReducer<S, A> = (prevState: S, action: A) => S;

export type ConfigStore<S> = Readonly<{
    getState: () => S;
    dispatch: Dispatch<Action>;
}>;

export type UseConfigStore<S> = () => ConfigStore<S>;
