/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { Vertex, Edge } from 'lsif-protocol';
import { Writer } from './writer';

export interface Emitter {
	emit(element: Vertex | Edge): void;
}

export const create = (writer: Writer): Emitter => {
	return {
		emit: (element: Vertex | Edge) => {
			writer.writeln(JSON.stringify(element, undefined, 0));
		},
	};
}