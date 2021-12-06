import { PipeTransform, BadRequestException } from "@nestjs/common";

import { BoardStatus } from "../boards-status.enum";

export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    // transform(value: any, metadata: ArgumentMetadata) { # Check value, metadata
    //     console.log('value:::', value);
    //     console.log('metadata:::', metadata);
    //     return value;
    // }
    transform(value: any) {
        value = value.toUpperCase();

        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} isn't in the status options`)
        }

        return value;
    }

    private isStatusValid(status: any) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }

}