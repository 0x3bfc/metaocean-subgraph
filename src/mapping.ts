import { MetadataCreated, MetadataUpdated } from './types/Metadata/Metadata'
import { Metadata } from './types/schema'

export function handleMetadataCreated(event: MetadataCreated): void {
  let metadata = new Metadata(event.transaction.from.toHex())
  metadata.dataToken = event.params.dataToken
  metadata.createdBy = event.params.createdBy
  metadata.flags = event.params.flags
  metadata.data = event.params.data
  metadata.save()
}

export function handleMetadataUpdated(event: MetadataUpdated): void {
  let id = event.transaction.from.toHex()
  let metadata = Metadata.load(id)
  if (metadata == null) {
    metadata = new Metadata(id)
  }
  metadata.dataToken = event.params.dataToken
  metadata.createdBy = event.params.updatedBy
  metadata.flags = event.params.flags
  metadata.data = event.params.data
  metadata.save()
}