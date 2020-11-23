import { MetadataCreated, MetadataUpdated } from '../generated/Metadata/Metadata'
import { Metadata } from '../generated/schema'

export function handleMetadataCreated(event: MetadataCreated): void {
  let metadata = new Metadata(event.params.id.toHex())
  metadata.dataToken = event.params.dataToken
  metadata.createdBy = event.params.createdBy
  metadata.flags = event.params.flags
  metadata.data = event.params.data
  metadata.save()
}

export function handleMetadataUpdated(event: MetadataUpdated): void {
  let id = event.params.id.toHex()
  let metadata = Metadata.load(id)
  if (metadata == null) {
    metadata = new Metadata(id)
  }
  metadata.dataToken = event.params.dataToken
  metadata.createdBy = event.params.createdBy
  metadata.flags = event.params.flags
  metadata.data = event.params.data
  metadata.save()
}