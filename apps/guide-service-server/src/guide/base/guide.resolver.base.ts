/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Guide } from "./Guide";
import { GuideCountArgs } from "./GuideCountArgs";
import { GuideFindManyArgs } from "./GuideFindManyArgs";
import { GuideFindUniqueArgs } from "./GuideFindUniqueArgs";
import { CreateGuideArgs } from "./CreateGuideArgs";
import { UpdateGuideArgs } from "./UpdateGuideArgs";
import { DeleteGuideArgs } from "./DeleteGuideArgs";
import { GenerateGuideInput } from "../../location/GenerateGuideInput";
import { RetrieveGuideInput } from "../RetrieveGuideInput";
import { GuideCreateInput } from "./GuideCreateInput";
import { StoreGuideInput } from "../StoreGuideInput";
import { GuideService } from "../guide.service";
@graphql.Resolver(() => Guide)
export class GuideResolverBase {
  constructor(protected readonly service: GuideService) {}

  async _guidesMeta(
    @graphql.Args() args: GuideCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Guide])
  async guides(@graphql.Args() args: GuideFindManyArgs): Promise<Guide[]> {
    return this.service.guides(args);
  }

  @graphql.Query(() => Guide, { nullable: true })
  async guide(
    @graphql.Args() args: GuideFindUniqueArgs
  ): Promise<Guide | null> {
    const result = await this.service.guide(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Guide)
  async createGuide(@graphql.Args() args: CreateGuideArgs): Promise<Guide> {
    return await this.service.createGuide({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Guide)
  async updateGuide(
    @graphql.Args() args: UpdateGuideArgs
  ): Promise<Guide | null> {
    try {
      return await this.service.updateGuide({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Guide)
  async deleteGuide(
    @graphql.Args() args: DeleteGuideArgs
  ): Promise<Guide | null> {
    try {
      return await this.service.deleteGuide(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => String)
  async GenerateGuide(
    @graphql.Args()
    args: GenerateGuideInput
  ): Promise<string> {
    return this.service.GenerateGuide(args);
  }

  @graphql.Query(() => [GuideCreateInput])
  async RetrieveGuide(
    @graphql.Args()
    args: RetrieveGuideInput
  ): Promise<GuideCreateInput[]> {
    return this.service.RetrieveGuide(args);
  }

  @graphql.Mutation(() => String)
  async StoreGuide(
    @graphql.Args()
    args: StoreGuideInput
  ): Promise<string> {
    return this.service.StoreGuide(args);
  }
}